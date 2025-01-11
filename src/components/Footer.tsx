'use client'
// import { useEffect, useState } from 'react';
import VisitorCounter from "@/components/VisitorCounter"

interface ApiResponse {
  id: number;
  name: string;
  count: number;
  created_at: string;
  updated_at: string;
  namespace_id: number;
  namespace: {
    id: number;
    name: string;
    created_at: string;
    updated_at: string;
  };
}

const Footer = () => {
  // const [data, setData] = useState<ApiResponse | null>(null); // Explicitly type state

  // useEffect(() => {
  //   async function fetchData() {
  //     try {
  //       const response = await fetch('https://api.counterapi.dev/v1/sdi/2025/up'); // API endpoint
  //       const result: ApiResponse = await response.json(); // Type the API response
  //       setData(result);
  //     } catch (error) {
  //       console.error('Error fetching data:', error);
  //     }
  //   }

  //   fetchData();
  // }, []);

  return (
    <footer className="bg-gradient-to-t from-indigo-900 via-indigo-800 to-indigo-700 text-white">
      <div className="max-w-[90%] mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-7 gap-8">
          {/* About Section */}
          <div className="col-span-2">
            <h3 className="text-xl font-bold mb-4">Smart Delhi Ideathon 2025</h3>
            <p className="text-gray-300 text-sm leading-6">
              Reinventing Delhi with tech and creativity. Address urban
              governance challenges through innovation, collaboration, and
              cutting-edge solutions.
            </p>
          </div>

          {/* Quick Links */}
          <div className="col-span-1">
            <h3 className="text-xl font-bold mb-4">Quick Links</h3>
            <ul className="space-y-3">
              <li>
                <a
                  href="#about"
                  className="text-gray-300 hover:text-white transition"
                >
                  About
                </a>
              </li>
              <li>
                <a
                  href="#themes"
                  className="text-gray-300 hover:text-white transition"
                >
                  Themes
                </a>
              </li>
              <li>
                <a
                  href="/problem-statements"
                  className="text-gray-300 hover:text-white transition"
                >
                  Problem Statements
                </a>
              </li>
              <li>
                <a
                  href="/contact"
                  className="text-gray-300 hover:text-white transition"
                >
                  Contact us
                </a>
              </li>
            </ul>
          </div>

          {/* {collaborators} */}
          <div className="flex flex-col items-center col-span-2 text-sm text-center">
            <h3 className="text-xl font-bold mb-4">Collaborators</h3>
            <div className="flex flex-wrap justify-center items-center gap-[16px]">
              <div className="flex flex-col items-center justify-center pb-2">
                <img
                  src="/images/iPCA.png"
                  alt="Partner 1"
                  className="h-16 w-16 mb-2 rounded-full"
                />
                <p className="text-xs">Industry Partner</p>
              </div>

              <div className="flex flex-col items-center justify-center pb-2">
                <img
                  src="/images/IPU IIF.png"
                  alt="Partner 2"
                  className=" h-16 w-16 mb-2 rounded-full"
                />
                <p className="text-xs">Startup Collaborator</p>
              </div>
              <div className="flex flex-col items-center justify-center pb-2">
                <img
                  src="/images/IDEA1.png"
                  alt="Partner 2"
                  className=" h-16 w-16 mb-2 object-cover rounded-full"
                />
                <p className="text-xs">Training Partner</p>
              </div>

              <div className="flex flex-col items-center justify-center pb-2">
                <img
                  src="/images/ACM.jpg"
                  alt="Partner 2"
                  className=" h-16 w-16 mb-2 rounded-full"
                />
                <p className="text-xs">ACM Student Chapter</p>
              </div>
              <div className="flex flex-col items-center justify-center pb-2">
                <img
                  src="/images/IEEE.jpeg"
                  alt="Partner 2"
                  className=" h-16 w-16 mb-2 rounded-full"
                />
                <p className="text-xs">IEEE GGSIPU</p>
              </div>
            </div>

            {/* Contact and Socials */}
          </div>
          <div className="col-span-2">
            <h3 className="text-xl font-bold mb-4">Get in Touch</h3>
            <p className="text-gray-300 text-sm mb-4">
              Reach out to us for inquiries or partnerships.
            </p>
            <p className="flex items-center gap-2">
              <span className="text-indigo-300">📧</span>
              <a
                href="mailto:sdi2025@ipu.ac.in"
                className="text-gray-300 hover:text-white transition"
              >
                sdi2025@ipu.ac.in
              </a>
            </p>
            <p className="flex items-center gap-2">
              <span className="text-indigo-300">📞</span>
              <a
                href="tel:+911234567890"
                className="text-gray-300 hover:text-white transition"
              >
                +91 9560434006
              </a>
            </p>

          </div>


        </div>
        <hr className="border-indigo-500 my-8" />
        <div>
              {/* {data ? (
                <pre>{JSON.stringify(data, null, 2)}</pre>
              ) : (
                <p>Count is Loading...</p>
              )} */}

              {/* Display visit count */}
              <div className="py-2 text-lg text-center">
                {/* This site has been visited <b>{data ? data.count : '...'}</b> times. */}
                <VisitorCounter />
              </div>
            </div>
        <hr className="border-indigo-500 my-8" />
        {/* Footer Bottom */}
        <div className="flex flex-col md:flex-row items-center justify-center text-gray-400 text-sm">
          <p>
            © {new Date().getFullYear()} Smart Delhi Ideathon. All Rights
            Reserved.
          </p>

        </div>
      </div>
    </footer>
  );
};

export default Footer;
