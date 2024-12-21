const Footer = () => {
  return (
    <footer className="bg-gradient-to-t from-indigo-900 via-indigo-800 to-indigo-700 text-white">
      <div className="max-w-[90%] mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-7 gap-8">
          {/* About Section */}
          <div className="col-span-2">
            <h3 className="text-xl font-bold mb-4">Smart Delhi Ideathon</h3>
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
                  href="#agenda"
                  className="text-gray-300 hover:text-white transition"
                >
                  Agenda
                </a>
              </li>
              <li>
                <a
                  href="#sponsors"
                  className="text-gray-300 hover:text-white transition"
                >
                  Sponsors
                </a>
              </li>
              <li>
                <a
                  href="#contact"
                  className="text-gray-300 hover:text-white transition"
                >
                  Contact Us
                </a>
              </li>
            </ul>
          </div>

          {/* {collaborators} */}
          <div className="flex flex-col items-center col-span-2 text-sm text-center">
            <h3 className="text-xl font-bold mb-4">Collaborators</h3>
            <div className="grid grid-cols-3 lg:grid-cols-3 gap-[4px]">
              <div className="flex flex-col items-center justify-center pb-2">
                <img
                  src="/images/aboutUs.png"
                  alt="Partner 1"
                  className="h-20 w-20 mb-2 rounded-full"
                />
                <p>Industry Partner</p>
              </div>
              <div className="flex flex-col items-center justify-center pb-2">
                <img
                  src="/images/aboutUs.png"
                  alt="Partner 2"
                  className=" h-20 w-20 mb-2 rounded-full"
                />
                <p>Knowledge Partner</p>
              </div>

              <div className="flex flex-col items-center justify-center pb-2">
                <img
                  src="/images/aboutUs.png"
                  alt="Partner 2"
                  className=" h-20 w-20 mb-2 rounded-full"
                />
                <p>Startup Collaborator</p>
              </div>
              <div className="flex flex-col items-center justify-center pb-2">
                <img
                  src="/images/aboutUs.png"
                  alt="Partner 2"
                  className=" h-20 w-20 mb-2 rounded-full"
                />
                <p>Training Partner</p>
              </div>

              <div className="flex flex-col items-center justify-center pb-2">
                <img
                  src="/images/aboutUs.png"
                  alt="Partner 2"
                  className=" h-20 w-20 mb-2 rounded-full"
                />
                <p>ACM Student Chapter</p>
              </div>
              <div className="flex flex-col items-center justify-center pb-2">
                <img
                  src="/images/aboutUs.png"
                  alt="Partner 2"
                  className=" h-20 w-20 mb-2 rounded-full"
                />
                <p>IEEE GGSIPU</p>
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
                Sdi2025@ipu.ac.in
              </a>
            </p>
            <p className="flex items-center gap-2">
              <span className="text-indigo-300">📞</span>
              <a
                href="tel:+911234567890"
                className="text-gray-300 hover:text-white transition"
              >
                +91 12345 67890
              </a>
            </p>
            <div className="flex mt-6 gap-4">
              <a
                href="#"
                className="w-8 h-8 flex items-center justify-center rounded-full bg-indigo-800 hover:bg-indigo-600 transition"
                title="Twitter"
              >
                🐦
              </a>
              <a
                href="#"
                className="w-8 h-8 flex items-center justify-center rounded-full bg-indigo-800 hover:bg-indigo-600 transition"
                title="LinkedIn"
              >
                🔗
              </a>
              <a
                href="#"
                className="w-8 h-8 flex items-center justify-center rounded-full bg-indigo-800 hover:bg-indigo-600 transition"
                title="Instagram"
              >
                📸
              </a>
            </div>
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
