export default function AboutUs() {
    return (
      <section className="relative bg-gradient-to-r from-gray-50 to-gray-100 py-16 md:py-24 overflow-hidden">
        <div className="container mx-auto px-6 lg:px-16">
          <div className="flex flex-col md:flex-row items-center gap-16">
            {/* Left Section: Image or Illustration */}
            <div className="w-full md:w-[40%] relative">
              <img
                src="/images/aboutUs.png" // Replace with your illustration path
                alt="Smart Delhi Ideathon"
                className="w-full max-w-md mx-auto md:max-w-none md:mx-0 transform hover:scale-[102%] transition duration-300 rounded-lg"
              />
              {/* Decorative Circle */}
              <div className="absolute -top-10 -left-10 w-32 h-32 bg-indigo-500 rounded-full blur-xl opacity-30 pointer-events-none"></div>
              <div className="absolute bottom-10 right-10 w-24 h-24 bg-pink-500 rounded-full blur-xl opacity-30 pointer-events-none"></div>
            </div>
  
            {/* Right Section: Content */}
            <div className="w-full md:w-1/2 text-center md:text-left">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-800 leading-tight mb-6">
                About the <span className="text-indigo-600">Smart Delhi Ideathon</span>
              </h2>
              <p className="text-gray-600 text-lg leading-relaxed mb-6">
                <span className="font-bold text-gray-800">Smart Delhi Ideathon</span> is an initiative
                inviting college students to craft <span className="text-indigo-600">innovative solutions</span> for
                Delhi&apos;s urban challenges. Focusing on areas like <span className="font-bold text-gray-800">air
                pollution, traffic management, waste processing, women&apos;s safety</span>, and{" "}
                <span className="font-bold text-gray-800">economic development</span>, participants will leverage
                cutting-edge technologies, such as <span className="text-indigo-600">AI</span>, to create practical and
                scalable solutions.
              </p>
              <p className="text-gray-600 text-lg leading-relaxed mb-6">
                Collaborate with policymakers, domain experts, and academicians to refine your strategies and
                contribute to making Delhi a model of sustainable and citizen-centric urban governance.
              </p>
              <div className="mt-6 flex justify-center md:justify-start gap-4">
                <button className="px-6 py-3 bg-indigo-600 text-white font-bold rounded-lg shadow-md hover:bg-indigo-700 transition">
                  Learn More
                </button>
                <button className="px-6 py-3 bg-white text-gray-800 font-bold rounded-lg shadow-md hover:bg-gray-300 transition">
                    Register Now
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
  