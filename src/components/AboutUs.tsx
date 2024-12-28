"use client"
import Link from "next/link";
import { ToastContainer, toast } from "react-toastify";


export default function AboutUs() {
  return (
    <section className="relative bg-gradient-to-r from-gray-50 to-gray-100 py-16 md:py-24 overflow-hidden">
      <div className="container mx-auto px-6 lg:px-16">
        <div className="flex flex-col md:flex-row items-center gap-16">
          {/* Left Section: Image or Illustration */}
          <div className="w-full md:w-[40%] relative">
            <img
              src="/images/about.jpg" // Replace with your illustration path
              alt="Smart Delhi Ideathon"
              className="w-full max-w-md mx-auto md:max-w-none md:mx-0 transform hover:scale-[103%] transition duration-300 rounded-lg shadow-lg"
            />
          </div>

          {/* Right Section: Content */}
          <div className="w-full md:w-1/2 text-justify">
            {/* Decorative Elements */}
            <div className="absolute md:hidden bottom-10 left-10 w-32 h-32 bg-indigo-500 rounded-full blur-xl opacity-30 pointer-events-none"></div>
            <div className="absolute md:hidden bottom-10 right-10 w-24 h-24 bg-pink-500 rounded-full blur-xl opacity-30 pointer-events-none"></div>

            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 leading-tight mb-6">
              About the <span className="text-indigo-600">Smart Delhi Ideathon</span>
            </h2>
            <p className="text-gray-600 text-lg leading-relaxed mb-6">
              <span className="font-bold text-gray-800">Smart Delhi Ideathon (SDI 2025)</span> is a platform for students to contribute their 
              <span className="text-indigo-600"> “Scientific Social Responsibility”</span>, tackling Delhi&apos;s urban challenges while meeting the UN&apos;s 
              <span className="text-indigo-600"> Sustainable Development Goal 11: Sustainable Cities and Communities</span>.
            </p>
            <p className="text-gray-600 text-lg leading-relaxed mb-6">
              Participants will work on issues like <span className="font-bold text-gray-800">air pollution, traffic management, waste processing, 
              women&apos;s safety</span>, and <span className="font-bold text-gray-800">water</span>, using technologies like 
              <span className="text-indigo-600"> AI</span> to build scalable, impactful solutions.
            </p>
            <p className="text-gray-600 text-lg leading-relaxed mb-6">
              Collaborate with policymakers, technologists, and academicians to refine your strategies and contribute 
              to making Delhi a model of sustainable and citizen-centric urban governance.
            </p>
            <div className="mt-6 flex justify-center md:justify-start gap-4">
              <Link href="/problem-statements">
                <button className="px-6 py-3 bg-indigo-600 text-white font-bold rounded-lg shadow-md hover:bg-indigo-700 transition">
                  View Problem Statements
                </button>
              </Link>
              <Link href="/" onClick={() => toast("Registration will be open soon")}>
                <button className="px-6 py-3 bg-white text-gray-800 font-bold rounded-lg shadow-md border border-gray-300 hover:bg-gray-200 transition">
                  Register Now
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
      <ToastContainer theme="dark" position="bottom-center" />
    </section>
  );
}
